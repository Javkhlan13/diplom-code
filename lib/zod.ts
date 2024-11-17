import { z } from "zod";

const phoneZod = z.coerce.number();
const passwordZod = z
  .string()
  .min(1, { message: "Нууц үгээ оруулна уу" })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Нууц үг нь дор хаяж нэг жижиг үсэг, нэг том үсэг оруулсан 8 тэмдэгтээс бүрдэх ёстой."
  );
const nameZod = z.string().min(1, { message: "Нэрээ оруулна уу" });
const emailZod = z.string().email();
const genderZod = z.enum(["Male", "Female"]);
const roleZod = z.enum(["Admin", "Employee"]);
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
  addressZod,
};
export default zods;
