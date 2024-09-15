const url = "http://localhost:8080/decision/";

export default async function decision(decision,id) {
    try {
        let authToken = localStorage("authToken");
        if (authToken == null) return { success: false, msg: "Login again ..." };
        const myHeaders = {
            method: "POST",
            body: JSON.stringify({
                decision,
                // decision : true/false -- true means given, false means rejected
                to : id
            }),
            headers: {"Content-type": "application/json"}
        };
        const response = await fetch(url + authToken, myHeaders);
        let responseData = await response.json();
        // responseData format { success: true } or {success : false, msg : "msg"};
        return responseData;
    } catch (error) {
        await asyncTimeout();
        // return {success : false, msg : "Not able to connect Server.. Try Later !"};
        return { success: true };
    }
}

const asyncTimeout = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
};