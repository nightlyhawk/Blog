from django.contrib.auth import get_user_model
from django.utils import timezone
from django.urls import reverse
from django.template.defaultfilters import slugify
from django.db import models

# Create your models here.


class Post(models.Model):

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("published", "Published")
    )

    # DB Fields
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=300, unique=True, editable=False)
    published = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="blog_posts"
    )

    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default="draft"
    )

    class Meta:
        ordering = ("-published",)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)
        pass

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog:post_detail", kwargs={"slug": self.slug})
