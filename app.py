from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/generate", methods=["POST"])
def generate_resume():
    data = request.get_json()
    name = data.get("name", "Unknown")
    education = data.get("education", "Not provided")
    skills = data.get("skills", "Not provided")
    experience = data.get("experience", "Not provided")

    resume_text = f"""
    Resume
    ======
    Name: {name}
    Education: {education}
    Skills: {skills}
    Experience: {experience}
    """

    return jsonify({"resume": resume_text})

if __name__ == "__main__":
    app.run(debug=True)
