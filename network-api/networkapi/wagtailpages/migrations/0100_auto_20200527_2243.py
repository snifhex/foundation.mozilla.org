# Generated by Django 2.2.12 on 2020-05-27 22:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailpages', '0099_auto_20200527_1836'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='banneredcampaignpage',
            options={'verbose_name': 'Banner Page', 'verbose_name_plural': 'Banner pages'},
        ),
        migrations.AlterModelOptions(
            name='opportunitypage',
            options={'verbose_name': 'Default Page', 'verbose_name_plural': 'Default pages'},
        ),
    ]