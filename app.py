from flask import Flask, render_template, request, send_file
import openai
import pdfkit

app = Flask(__name__)

# Your OpenAI API key
openai.api_key = "YOUR_OPENAI_KEY"

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Get user input
        name = request.form['name']
        education = request.form['education']
        skills = request.form['skills']
        experience = request.form['experience']

        # Generate resume text using AI
        prompt = f"Generate a professional resume for:\nName: {name}\nEducation: {education}\nSkills: {skills}\nExperience: {experience}"
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=500
        )
        resume_text = response['choices'][0]['text']

        # Generate PDF
        pdf_path = f"resumes/{name}_resume.pdf"
        pdfkit.from_string(resume_text, pdf_path)

        return send_file(pdf_path, as_attachment=True)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

