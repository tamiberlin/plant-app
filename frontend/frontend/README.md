# 🌿 House Plants App - Fullstack Intern Assignment


## 🧰 Technologies Used

### Backend:

* **Python**
* **Flask**

### Frontend:

* **React (Vite)**

---

## 🔧 Project Structure

* `frontend/frontend/` – React client that displays plant information in table and detail views.
* `backend/` – Flask server that acts as a proxy between the client and the third-party plant API.
* `main.py` – API logic including script for fetching data from RapidAPI
* `fetch_data.js` – Handles fetching plant data from the backend.
* `PlantDetails.jsx` – Displays detailed view for a specific plant.
* `Plants.jsx` – Main table + search + filter view.

---

## ✅ Features

*  **Table view** of all plants (Latin name, family, category).
* &#x20;**Search bar** to filter by Latin name or family.
* &#x20;**Dropdown filter** by category (based on unique values).
* &#x20;**Detail page** for each plant with full information and image.
* &#x20;Backend routes:

  * `/api/plants` – Returns simplified list of plants.
  * `/api/plants/<plant_id>` – Returns full info for a specific plant.
* &#x20;**Error handling** on both client and server.
* &#x20;Basic unit test (bonus).

---

## &#x20;How I Approached the Task

1. **Planning** – Broke the project into frontend/backend, listed features according to the instructions I got.
2. **Backend First** – Created a Flask server that fetches and filters data from RapidAPI. - (used a youtube video and the RapidAPI docs resources)
3. **Frontend** – Used React (with Vite) to display data using components, added filters and routing. - (used resources like Geeks for Geeks, Reddit and Stackoverflow)
4. **Detail View** – Used React Router `useParams` to show a single plant by ID implemented dymanic routing.
5. **Error Handling** – Added status checks and error messages.



## Notes

* Due to API rate limits and restrictions, the backend acts as a proxy to avoid CORS issues.
* The app assumes each plant object has a unique `id` field.
* All state updates and filtering are done locally for performance.
* The RapidAPI key is limited for 500 requests, an error will be thrown when the limit is reached.

---

## 🧪 Run Instructions

```bash
#Backend
cd backend
python main.py

#Frontend
cd frontend/frontend
npm install
npm run dev
```








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
