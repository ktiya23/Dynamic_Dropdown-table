## Dynamic Table with Role and Skills Management ##

**Overview**

This React project demonstrates a dynamic table that allows users to:

- Select a role from a dropdown menu and display the selected role in a text field.
- Add and manage multiple skills through a multi-select dropdown.
- Add new skills dynamically, which immediately appear in the dropdown options
- Add new rows dynamically to manage multiple entries.
- The UI is styled using Material-UI (MUI) components for a clean and responsive design.

**Deployed Link**
https://marvelous-jalebi-2bb3aa.netlify.app/

**Features**

1. Role Selection:

- A dropdown menu allows selecting roles (e.g., Manager, Developer, Designer).
- The selected role is displayed in a disabled text field below the dropdown.

2. Skills Management:

- A multi-select dropdown allows selecting multiple skills for a user.
- Users can add new skills dynamically through an input field, which immediately updates the dropdown options.

3. Dynamic Row Addition:

- Users can add new rows to manage additional entries.

**Project Structure**

project-root
├── src
│   ├── components
│   │   ├── DynamicTable.jsx        # Main table component
│   │   ├── SingleDropdown.jsx     # Single-select dropdown component for roles
│   │   ├── MultipleDropdown.jsx   # Multi-select dropdown component for skills
│   ├── App.jsx                    # Entry point for the application
│   ├── index.css                  # Global CSS for the application
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation

**Installation**

Prerequisites- Node.js (v14 or later) and npm or yarn package manager

## Steps

1. Clone the repository:
git clone https://github.com/ktiya23/Employee_Skill_Management.git

2. Navigate to the project directory:
cd project-root

3. Install dependencies:
npm install
# or
yarn install

4. Start the development server:
npm start
# or
yarn start

Open the application in your browser at http://localhost:3000.

**Usage**

1. Role Selection:
Use the dropdown in the "Role" column to select a role for each row.
The selected role will appear in the text field below the dropdown.

2. Skills Management:
- Use the multi-select dropdown in the "Skills" column to assign skills.
- Add a new skill using the input field and "Add" button. The skill will immediately appear in the dropdown and be selectable.

3. Adding Rows:
- Click the "Add Row" button to add a new entry.

4. Skill Proficiency Sliders:
- Add a Sliders to let employee rate themselves based on their skills.

**Technologies Used**

- React: For building the UI and managing state.
- Material-UI (MUI): For responsive and visually appealing components.

