import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  // Yaha Firebase wala config paste karo
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin.html";
    })
    .catch(() => {
      alert("Wrong email or password");
    });
};

window.addMemory = async function () {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const file = document.getElementById("file").files[0];

  if (!title || !file) {
    alert("Title aur file select karo");
    return;
  }

  const fileRef = ref(storage, "memories/" + Date.now() + "-" + file.name);
  await uploadBytes(fileRef, file);

  const fileURL = await getDownloadURL(fileRef);

  await addDoc(collection(db, "memories"), {
    title: title,
    desc: desc,
    fileURL: fileURL,
    fileType: file.type,
    createdAt: new Date()
  });

  alert("Memory upload ho gayi");
};

async function loadMemories() {
  const box = document.getElementById("memoriesList");
  if (!box) return;

  const snapshot = await getDocs(collection(db, "memories"));
  box.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();

    let media = "";

    if (data.fileType.startsWith("image")) {
      media = `<img src="${data.fileURL}" width="300">`;
    } else if (data.fileType.startsWith("video")) {
      media = `<video src="${data.fileURL}" width="300" controls></video>`;
    } else {
      media = `<a href="${data.fileURL}" target="_blank">Open Document</a>`;
    }

    box.innerHTML += `
      <div class="memory-card">
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        ${media}
      </div>
    `;
  });
}

loadMemories();