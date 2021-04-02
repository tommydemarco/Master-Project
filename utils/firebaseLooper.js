const firebaseLooper = (snapshot) => {
    let data = [];
    snapshot.forEach((document) => {
        data.push({
            ...document.data(),
            id: document.id,
        });
    });

    return data;
};

export default firebaseLooper;
