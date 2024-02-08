CV Resume Project

Main app: Resume.jsx

On load - Reseume.jsx checks for localStorage. If empty, creates templates. Those templates are initialized as State.

The SubmitButton.jsx pushes State into localStorage.

Files in the "cv" folder "render" from localStorage and are displayed on right column.

Files on the left column: Education.jsx, Experience.jsx, Personal.jsx, all use State for change and value. They are only saved (if page is reloaded) if they stored in localStorage via Submit button.
