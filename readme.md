# Tennis Cricket Association of Maharashtra (TCAM) Website

This is the official website for the Tennis Cricket Association of Maharashtra, built with Django. The site promotes tennis cricket across Maharashtra, showcases tournaments, leadership, and provides contact and registration options.

---

## Features

- **Responsive Design:** Mobile-friendly and modern UI.
- **Dynamic Hero Carousel:** Easily update hero images from Django views.
- **Tournaments Section:** Filterable and dynamic, with gallery modals.
- **Leadership Section:** Profiles of key association members.
- **Contact & Newsletter:** Contact form and newsletter subscription.
- **Multi-language Support:** Language toggle and translation-ready.
- **Django Static Files:** All assets managed via Django’s static system.

---

## Project Structure

```
TCAM/
├── main/
│   ├── templates/
│   │   ├── base.html
│   │   └── index.html
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── views.py
│   └── ...
├── tcam_site/
│   ├── settings.py
│   └── urls.py
├── manage.py
└── README.md
```

---

## Setup Instructions

1. **Clone the Repository**
   ```sh
   git clone <your-repo-url>
   cd TCAM
   ```

2. **Create and Activate Virtual Environment**
   ```sh
   python -m venv venv
   venv\Scripts\activate  # On Windows
   # source venv/bin/activate  # On Mac/Linux
   ```

3. **Install Dependencies**
   ```sh
   pip install django
   ```

4. **Run Migrations**
   ```sh
   python manage.py migrate
   ```

5. **Run the Development Server**
   ```sh
   python manage.py runserver
   ```

6. **Access the Site**
   - Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

---

## Customization

- **Hero Images:**  
  Update the `hero_images` list in `main/views.py` to change carousel images.

- **Tournaments:**  
  Tournament data is managed in the JavaScript section of `index.html`. For dynamic tournaments, consider moving this to Django models.

- **Static Files:**  
  Place all CSS, JS, and images in the `main/static/` directory. Reference them in templates using `{% static %}`.

- **Navigation & URLs:**  
  All internal links use Django’s `{% url %}` tag for maintainability.

---

## Notes

- Make sure `DEBUG = True` in `settings.py` during development to serve static files.
- For production, configure static and media file serving as per Django documentation.
- If you add new pages, update `urls.py` and use `{% url 'your_view_name' %}` in templates.

---

## License

This project is for demonstration and association purposes. For commercial or redistribution use, please contact the Tennis Cricket Association of Maharashtra.

---

## Contact

For questions or contributions, email [info@tcai.org](mailto:info@tcai.org) or use the contact form on