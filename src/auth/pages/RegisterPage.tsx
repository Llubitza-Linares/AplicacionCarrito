import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/storeReducer";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

export const RegisterPage = () => {
  const {setAuth} = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regist = () => {
    dispatch({ type: types.login }); 
    setAuth({email: "aaaaa"})    
    navigate("/");
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm();

  return (
    <AuthLayout title="Registrarse a Carrito de Compras">
      <form onSubmit={handleSubmit(regist)}>
        <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Name"
              fullWidth
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              {...register("email", { required: true})}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              {...register("password", { required: true,minLength: 6})}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="passwordVerified"
              type="password"
              placeholder="Verificar Password"
              fullWidth
              {...register("passwordVerified", { required: true,minLength: 6})}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth 
               type="submit">
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
