from . import db

class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
            username = db.Column(db.String(80), unique=True, nullable=False)
                email = db.Column(db.String(120), unique=True, nullable=False)
                    password = db.Column(db.String(200), nullable=False)
                        achievements = db.relationship('Achievement', backref='user', lazy=True)

                            def __repr__(self):
                                        return f'<User {self.username}>'

