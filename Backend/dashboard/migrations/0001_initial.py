# Generated by Django 4.2.7 on 2023-12-19 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantAdminMenuModel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('foodName', models.CharField(max_length=50)),
                ('foodPrice', models.IntegerField(max_length=50)),
                ('foodDescription', models.CharField(max_length=100)),
                ('footType', models.EmailField(max_length=50)),
                ('footImage', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
