import * as admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../guia-clube-318317-c2d63c3bdb6e.json');

// Initialize our project application
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Set up database connection
const firestoreDb: FirebaseFirestore.Firestore = admin.firestore();
firestoreDb.settings({ timestampsInSnapshots: true });
export const firestore = firestoreDb;
