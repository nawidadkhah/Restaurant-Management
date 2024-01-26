# Generated by Django 4.2.3 on 2024-01-26 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('userEmail', models.EmailField(max_length=50)),
                ('restaurantName', models.CharField(max_length=50)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('Price', models.IntegerField()),
                ('orders', models.CharField(max_length=2000)),
            ],
        ),
        migrations.CreateModel(
            name='Reservations',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('userEmail', models.EmailField(max_length=50)),
                ('restaurantName', models.CharField(max_length=50)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('place', models.CharField(max_length=50)),
            ],
        ),
    ]
