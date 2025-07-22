# Environment Variables Setup for Firebase

This project uses environment variables to store Firebase credentials securely. Here's how to set them up:

## Local Development

1. Create a `.env` file in the root directory of your project
2. Add the following variables with your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Vercel Deployment

To deploy to Vercel, you need to add these environment variables in your Vercel dashboard:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each of the following variables:

| Variable Name | Description |
|---------------|-------------|
| `VITE_FIREBASE_API_KEY` | Your Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Your Firebase auth domain (usually `your-project-id.firebaseapp.com`) |
| `VITE_FIREBASE_PROJECT_ID` | Your Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Your Firebase storage bucket (usually `your-project-id.appspot.com`) |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Your Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Your Firebase measurement ID (for Analytics) |

## Getting Firebase Credentials

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. Click on your web app or create a new one
6. Copy the configuration values from the provided config object

## Security Notes

- Never commit your actual `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Environment variables prefixed with `VITE_` are exposed to the client-side code
- For server-side secrets, use different variable names without the `VITE_` prefix 