const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config.firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc =>{
        console.log('Notification added', doc)
    })
}

exports.projectCreation = functions.firestore
    .document('projects/{projectsId}')
    .onCreate(doc =>{
        const project = doc.data();
        const notification = {
            content: 'Added e new project',
            user: `${project.authorFname} ${project.authorLname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    }
);

exports.userJoined = functions.auth.user()
    .onCreate(user =>{
         admin.firestore().collection('users')
        .doc(user.uid)
        .get().then(doc =>{
            const newUser = doc.data();
            const notification = {
                content: 'Joined the party',
                user: `${newUser.fname} ${newUser.lname}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
    }
)


