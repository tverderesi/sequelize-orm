Certainly! Here's an updated version of the README with more specific information:

# ORM using Sequelize for an English School

## Description

This project is an API built using Sequelize as the ORM (Object-Relational Mapping) for interacting with the database. It provides endpoints for managing People, Cohorts, Levels, and Enrollments. The API follows the MVC (Model-View-Controller) architectural pattern. The idea is to futurely provide a simple fullstack application for people, cohorts, levels and enrollments for an English as Second Language School.

## Installation

To install and run the project, follow the steps below:

### Server (API)

1. Navigate to the `server` folder.
2. Install the required dependencies using `npm install`.
3. Set up your database host and credentials.
4. Configure the database connection in the project's configuration file (`config.js` or similar).
5. Run the server using `npm start`.

### Client (Frontend)

1. Navigate to the `client` folder.
2. Install the required dependencies using `npm install`.
3. Update the API endpoint in the client application to point to the correct server URL.
4. Run the client application using `npm start`.

## Pipeline Status



- [x] Set up project structure and file organization.
- [x] Implement Sequelize models for People, Level, Cohort, and Enrollment.
- [x] Create migrations for the database tables.
- [x] Seed the database with initial data.
- [x] Implement PersonController for CRUD operations on People.
- [x] Implement CohortController for CRUD operations on Cohorts.
- [x] Create routes for People and Cohorts, Levels and Enrollments.
- [x] Implement LevelController for CRUD operations on Levels.
- [x] Implement EnrollmentController for CRUD operations on Enrollments.
- [x] Implement PeopleController for CRUD operations on People.
- [x] Implement CohortController for CRUD operations on Cohorts.
- [x] Refactor Controllers into Services.
- [ ] Create client-side application for interacting with the API using Next.js.
- [ ] Host the database and deploy the application to a production environment.

## Usage

See [Installation](#installation) to check how to run client and server.

## Documentation

If you have any additional documentation for your project, provide details on where to find it or how to generate it.

## Contributing

To contribute to this project, you can follow these steps:

1. Fork the project repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your desired changes and improvements.
5. Commit and push your changes to your branch.
6. Submit a pull request to the original repository for review.

We appreciate your contributions and will review them as soon as possible.

## License

This project is licensed under the [MIT](LICENSE) License. You can find more information about the license in the `LICENSE` file.
