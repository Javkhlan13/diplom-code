import { z } from "zod";

const phoneZod = z.coerce.number();
const passwordZod = z
  .string()
  .min(1, { message: "Нууц үгээ оруулна уу" });
const nameZod = z.string().min(1, { message: "Нэрээ оруулна уу" });
const emailZod = z.string().email();
const genderZod = z.enum(["Male", "Female"]);
const roleZod = z.enum(["Student", "Teacher"]);
const addressZod = z
  .string()
  .min(10, {
    message: "Хамгийн багадаа 10 тэмдэгттэй байх ёстой.",
  })
  .max(160, {
    message: "30 тэмдэгтээс хэтрэхгүй байх ёстой.",
  });
const zods = {
  nameZod,
  emailZod,
  phoneZod,
  passwordZod,
  genderZod,
  roleZod,
};
export default zods;
