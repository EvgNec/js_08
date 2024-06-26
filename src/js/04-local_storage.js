export const save = (key, value) => {
    try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    } catch (err) { 
        console.error("Stringify error", err.message);
    }

 }

export const load = (key) => { 
      try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
}
