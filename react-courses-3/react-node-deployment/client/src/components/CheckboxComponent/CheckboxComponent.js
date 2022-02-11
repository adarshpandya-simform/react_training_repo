import { Checkbox, Divider, Heading, HStack } from "@chakra-ui/react";

/**
 * CheckboxComponent: for demonstrating
 * all features of Checkbox from chakra ui
 */
const CheckboxComponent = () => {
  return (
    <div>
      <Heading size={"lg"}>Checkboxes</Heading>
      <Divider />
      <br />
      <Heading size={"md"}>Simple Checkboxes</Heading>
      <Divider />
      <br />
      <HStack>
        <Checkbox>Agree Terms and conditions</Checkbox>
      </HStack>
      <br />
      <Heading size={"md"}>Checkbox with custom colors</Heading>
      <Divider />
      <br />
      <HStack>
        <Checkbox colorScheme={"twitter"}>Agree Terms and conditions</Checkbox>
        <Checkbox colorScheme={"whatsapp"}>Agree Terms and conditions</Checkbox>
      </HStack>
      <br />
      <Heading size={"md"}>Disabled Checkbox</Heading>
      <Divider />
      <br />
      <HStack>
        <Checkbox isDisabled colorScheme={"twitter"}>
          Agree Terms and conditions
        </Checkbox>
        <Checkbox isDisabled defaultIsChecked colorScheme={"whatsapp"}>
          Agree Terms and conditions
        </Checkbox>
      </HStack>
      <br />
    </div>
  );
};

export default CheckboxComponent;
