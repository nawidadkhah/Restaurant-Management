# Generated by Django 4.2.7 on 2023-11-15 12:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SignupModel',
            new_name='UserModel',
        ),
    ]
