import pypdf
reader = pypdf.PdfReader("dist/assets/General-CV(Sunny')-BnyBSLHl.pdf")
with open("cv_text.txt", "w", encoding="utf-8") as f:
    for page in reader.pages:
        f.write(page.extract_text() + "\n")
