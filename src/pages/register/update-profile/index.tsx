import { zodResolver } from "@hookform/resolvers/zod";

import { GetServerSideProps } from "next";
import { getServerSession} from "next-auth";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Container, Header } from "../styles";
import { FormAnnotation, ProfileBox } from "./styles";
import {
  Heading,
  MultiStep,
  Avatar,
  TextArea,
  Button,
  Text,
} from "@natanaelvich-ignite-ui/react";
import { api } from "../../../lib/axios";

const updateProfileSchema = z.object({
  bio: z.string(),
});

type UpdateProfileData = z.infer<typeof updateProfileSchema>;

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  });

  const session = useSession();
  const router = useRouter();

  console.log(session)

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put("/users/profile", {
      bio: data.bio,
    });

    await router.push(`/schedule/${session.data?.user?.name}`);
  }

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={4} />
        </Header>

        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text>Foto de perfil</Text>
            <Avatar
              src={session.data?.user?.image || ""}
              referrerPolicy="no-referrer"
              alt={session.data?.user?.name || ""}
            />
          </label>

          <label>
            <Text size="sm">Sobre você</Text>
            <TextArea {...register("bio")} />
            <FormAnnotation size="sm">
              Fale um pouco sobre você. Isto será exibido em sua página pessoal.
            </FormAnnotation>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  );
}

