import zod from "zod"

const login = zod.object({
    user:zod.string().min(5 , "minimum 5 characters are expected").regex(/[^0-9]/ , "numbers not permited for username").regex(/^[a-zA-Z0-9а-яА-ЯёЁ\s]+$/ , "специальные символы запрещены"),
    password:zod.string().min(5 , "minimum 5 characters expected").regex(/[a-z]/ , "минимум один маленкий регистр должна участвовать").regex(/[A-Z]/ , "минимум большо региср тоджна участвовать").regex(/[0-9]/ , "номера должгы участвовать")
});

export default login