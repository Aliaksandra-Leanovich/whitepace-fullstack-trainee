import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ButtonVariants, LinkVariants, VariantsTypography } from "../../enums";
import { Colors, Typography } from "../../ui";
import { app } from "../../utils/firebase";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "../Link";
import { ContainerFormSC, NoUserMessageSC, StyledFormSC } from "./styles";
import { IUserForm } from "./types";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

const getAuthError = (error: string) => {
  switch (error) {
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/user-disabled":
      return "User disabled.";
    case "auth/invalid-email":
      return " Wrong email/password combination.";
    case "auth/wrong-password":
      return "Wrong email/password combination.";
    default:
      return "An unexpected error occurred.";
  }
};

export const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("authUser", token);
        await router.push("/");
      })
      .catch((error) => {
        setError(getAuthError(error.code));
      });
  };

  return (
    <ContainerFormSC>
      <Typography variant={VariantsTypography.h3} color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.
      </Typography>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        {error && <NoUserMessageSC>{error}</NoUserMessageSC>}
        <Input
          type="email"
          label="email"
          errors={errors.email}
          register={register}
          placeholder="Enter your email"
        />
        <Input
          type="password"
          label="password"
          errors={errors.password}
          register={register}
          placeholder="Enter your password"
        />
        <Button type="submit" variant={ButtonVariants.secondary}>
          Sign in
        </Button>
      </StyledFormSC>
      <Link
        href="/signup"
        text="I dont have an account"
        variant={LinkVariants.linkSmall}
      />
    </ContainerFormSC>
  );
};
