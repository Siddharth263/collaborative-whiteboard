# Collaborative Whiteboard - Miro Clone

This project is a clone of Miro, a collaborative online whiteboard platform, built using Next.js, TypeScript, Liveblock, Convex, and Clerk.

## Features

- **Whiteboard Functionality**: Users can create and collaborate on virtual whiteboards.
- **Real-time Collaboration**: Utilizes Liveblock for real-time collaboration, allowing multiple users to interact simultaneously.
- **Authentication**: Integrated Clerk for user authentication, ensuring secure access to the application.
- **Persistence**: Data is stored and managed using Convex, providing a reliable storage solution for board content.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **Liveblock**: A real-time collaboration platform for adding live collaboration features to applications.
- **Convex**: A data persistence and synchronization service for building collaborative applications.
- **Clerk**: A user authentication and identity management service for modern web applications.

## Installation

1. Clone the repository: `git clone https://github.com/Siddharth263/collaborative-whiteboard.git`
2. Navigate to the project directory: `cd collaborative-whiteboard`
3. Install dependencies: `npm install`
4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   CONVEX_DEPLOYMENT=your convex development link
   NEXT_PUBLIC_CONVEX_URL=your convex URL
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your clerk pk
   ```
6. Run the development server: `npm run dev`

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Screenshots

![Landing_Page](/screenshots/landing-page.png)
![After_Login](/screenshots/after-login.png)
![Creating_Organisation](/screenshots/creating-organisation.png)
![Account](/screenshots/account.png)
![Creating_Boards](/screenshots/creating-boards.png)
![Inside_Organisation](/screenshots/inside-org.png)
![Inviting_Members](/screenshots/inviting-member-with-roles.png)
![Receiving_Invites](/screenshots/receiving-invites-and-accepting.png)
![Orgaisation_Setting](/screenshots/org-setting.png)
![Renaming_Board_Real_Time](/screenshots/renaming-board-realtim.png)
![Responsive_Screens](/screenshots/responsive-screens.png)

## Contributing

Contributions are welcome! If you have any features or found a bug and want to fix it, please fork the repository, and put in a pull request for review. Thank you!

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by Miro
- Built with ❤️ by [Priyanshu](https://github.com/Siddharth263).
