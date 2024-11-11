export const validate=(email,password)=>{
    const email1=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const password1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!email1) return "Email is not valid.";
    if(!password1) return "Password is not valid.";
    return null;
}