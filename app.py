from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html", page="home")


@app.route("/bond")
def bond():
    return render_template("bond.html", page="bond")


@app.route("/birthday")
def birthday():
    return render_template("birthday.html", page="birthday")


@app.route("/surprise")
def surprise():
    return render_template("surprise.html", page="surprise")


@app.route("/celebrate")
def celebrate():
    return render_template("celebrate.html", page="celebrate")


@app.route("/wish")
def wish():
    return render_template("wish.html", page="wish")


@app.route("/final")
def final():
    return render_template("final.html", page="final")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)