from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from api import create_app
from api.functions.database_helper import import_sheet_to_database_from_speadsheet, get_sheet_from_database
from api.models import db

# sets up the app
app = create_app()

manager = Manager(app)
migrate = Migrate(app, db)

# adds the python manage.py db init, db migrate, db upgrade commands
manager.add_command("db", MigrateCommand)


@manager.command
def runserver():
    app.run(debug=True, host="0.0.0.0", port=5000)


@manager.command
def runworker():
    app.run(debug=False)


@manager.command
def recreate_db():
    """
    Recreates a database. This should only be used once
    when there's a new database instance. This shouldn't be
    used when you migrate your database.
    """
    db.drop_all()
    db.create_all()
    db.session.commit()



@manager.command
def import_sheet(spredsheet, sheetname, db_sheetname):
    """
    Imports sheet to  database. This should only be used once
    when there's a new sheet.
    """
    import_sheet_to_database_from_speadsheet(spredsheet, sheetname, db_sheetname)


@manager.command
def get_sheet(sheetname):
    """
    Imports sheet to  database. This should only be used once
    when there's a new sheet.
    """
    get_sheet_from_database(sheetname)

if __name__ == "__main__":
    manager.run()
