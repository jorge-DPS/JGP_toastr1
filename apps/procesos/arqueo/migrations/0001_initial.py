# Generated by Django 3.0 on 2022-09-12 20:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('empresa', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Caja',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_caja', models.IntegerField(blank=True, help_text='Codigo de Caja', null=True, verbose_name='Codigo Caja')),
                ('descripcion', models.CharField(blank=True, max_length=150, null=True, verbose_name='Descripcion')),
                ('sucursal', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='caja_sucursal', to='empresa.Sucursal', verbose_name='Sucursal')),
            ],
            options={
                'verbose_name': 'Caja',
                'verbose_name_plural': 'Cajas',
                'db_table': 'caja',
            },
        ),
        migrations.CreateModel(
            name='EncabezadoArqueo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(blank=True, null=True, verbose_name='Fecha')),
                ('total_sistema_a', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Total A')),
                ('total_sistema_b', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Total B')),
                ('total_material_monetario_mn', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Total Moneda Nacional')),
                ('total_material_monetario_me', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Total Moneda Extranjera')),
                ('caja', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='encabezado_caja', to='arqueo.Caja', verbose_name='Caja')),
                ('cajero', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='encabezado_user', to=settings.AUTH_USER_MODEL, verbose_name='Cajero')),
            ],
            options={
                'verbose_name': 'Encabezado',
                'verbose_name_plural': 'Encabezados',
                'db_table': 'encabezado_arqueo',
            },
        ),
        migrations.CreateModel(
            name='SaldoProducto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_producto_financiero_saldo', models.IntegerField(blank=True, default=0, help_text='Este es el codigo que se usa para productos', null=True, verbose_name='Codigo Producto')),
                ('saldo_sistema_a', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Saldo A')),
                ('saldo_sistema_b', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Saldo B')),
                ('fecha_proceso', models.DateField(blank=True, null=True, verbose_name='Fecha Proceso')),
                ('caja', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='saldo_producto_caja', to='arqueo.Caja', verbose_name='Caja')),
            ],
            options={
                'verbose_name': 'Saldo Producto',
                'verbose_name_plural': 'Saldos Productos',
                'db_table': 'saldo_producto',
            },
        ),
        migrations.CreateModel(
            name='MovimientoDia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_producto_financiero', models.IntegerField(blank=True, default=0, help_text='Este es el codigo que se usa para productos', null=True, verbose_name='Codigo Producto')),
                ('detalle', models.TextField(blank=True, null=True, verbose_name='Detalle')),
                ('tipo_movimiento', models.CharField(blank=True, choices=[('E', 'Entrada'), ('S', 'Salida')], max_length=1, null=True, verbose_name='Tipo Movimiento')),
                ('monto_a', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Monto A')),
                ('monto_b', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Monto B')),
                ('fecha_proceso_movimiento', models.DateField(blank=True, null=True, verbose_name='Fecha Proceso')),
                ('caja', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movimiento_dia_caja', to='arqueo.Caja', verbose_name='Caja')),
                ('encabezado', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movimiento_dia_encabezado', to='arqueo.EncabezadoArqueo', verbose_name='Encabezado')),
            ],
            options={
                'verbose_name': 'Movimiento Dia',
                'verbose_name_plural': 'Movimientos Dias',
                'db_table': 'movimiento_dia',
            },
        ),
        migrations.CreateModel(
            name='DetalleArqueo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_moneda', models.IntegerField(blank=True, default=0, help_text='Este es el tipo de moneda', null=True, verbose_name='Tipo moneda')),
                ('corte', models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True, verbose_name='Corte de moneda')),
                ('cantidad', models.IntegerField(blank=True, default=0, help_text='Cantidad', null=True, verbose_name='Cantidad')),
                ('total', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Total Efectivo')),
                ('encabezado', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='detalle_arqueo_encabezado', to='arqueo.EncabezadoArqueo', verbose_name='Encabezado')),
            ],
            options={
                'verbose_name': 'Detalle Arqueo',
                'verbose_name_plural': 'Detalles Arqueos',
                'db_table': 'detalle_arqueo',
            },
        ),
        migrations.CreateModel(
            name='CuentasRendir',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_transaccion', models.DateField(blank=True, null=True, verbose_name='Fecha transaccion')),
                ('monto_entregado', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Monto Entregado')),
                ('monto_recuperado', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Monto Recuperado')),
                ('saldo', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Saldo')),
                ('estado', models.CharField(blank=True, choices=[('P', 'Pendiente'), ('C', 'Cancelado')], max_length=1, null=True, verbose_name='Tipo Movimiento')),
                ('caja', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cuenta_rendir_caja', to='arqueo.Caja', verbose_name='Caja')),
                ('usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cuentas_rendir_usuario', to=settings.AUTH_USER_MODEL, verbose_name='Usuario')),
            ],
            options={
                'verbose_name': 'Cuenta Rendir',
                'verbose_name_plural': 'Cuentas Rendir',
                'db_table': 'cuentas_rendir',
            },
        ),
    ]
