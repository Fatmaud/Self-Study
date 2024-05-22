import LockIcon from "@mui/icons-material/Lock";
import { Box, TextField, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import image from "../assets/regi.avif";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import * as Yup from "yup";
import useAuthCall from "../hooks/useAuthCall";

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//!  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//!  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//!  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//!  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//!  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//!  validation çalışmaz.

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8)
    .max(50)
    .matches(/\d+/, "Your password should include at least one number!")
    .matches(
      /[A-Z]/,
      "Your password should include at least one uppercase letter!"
    )
    .matches(
      /[a-z]/,
      "Your password should include at least one lowercase letter!"
    )
    .matches(
      /[@$?&!%*]+/,
      "Your password should include at least one special character!"
    )
    .required("Required!"),
  //regex ifadesinin icindeki "+" birden fazla bu karakterlerden  kullanilabilecigini gösterir.
});

const Register = () => {
  const { register } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            //Formikin de validation yapisi var, ama biz Yup ile validation yapiyoruz⬇️⬇️:
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              register(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    id="username"
                    name="username" //formik name attribute'undan eşleştirme yapıyor.
                    label="Username"
                    InputProps={{ autoComplete: "off" }} //daha önce girilen bilgilerin unutulmasi icin
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
                    error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı (daha sağlıklı olması) için boolean deger döndürüyoruz.
                    // "touched" kullanıcının inputa tıklayıp tıklamadığını yakalar.
                    helperText={touched.username && errors.username}
                    //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
                  />
                  {/* error ve helperText propertyleri Textfield (MUI) componentine ait propertyler. */}
                  {/* mui textfield kullanmadığımzda söyle bir yapi kullanabiliriz: "<span>{touched.username && errors.username}</span>" */}

                  <TextField
                    id="First Name"
                    name="firstName"
                    label="FirstName"
                    InputProps={{ autoComplete: "off" }}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    id="Last Name"
                    name="lastName"
                    label="LastName"
                    InputProps={{ autoComplete: "off" }}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    InputProps={{ autoComplete: "off" }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    InputProps={{ autoComplete: "off" }}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />

                  <Button variant="contained" type="submit">
                    Sign Up
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
