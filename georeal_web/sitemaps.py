# georeal_web/sitemaps.py
from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'monthly'

    def items(self):
        return ['georeal_web:home', 'georeal_web:cookies']

    def location(self, item):
        return reverse(item)