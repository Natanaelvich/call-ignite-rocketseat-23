import { ArrowRight } from "phosphor-react";

import { Form, FormAnnotation } from "./styles";
import { TextInput, Button, Text } from "@natanaelvich-ignite-ui/react";

export function ClaimUsernameForm() {

  return (
    <>
      <Form as="form">
        <TextInput
          prefix="call.com/"
          placeholder="seu-usuário"
        />
        <Button  type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">Digite o nome do usuário desejado</Text>
      </FormAnnotation>
    </>
  );
}
