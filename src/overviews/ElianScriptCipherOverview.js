import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Elian Script Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Elian Script Cipher is a symbolic cipher where each letter of the
        plaintext is represented by a unique symbol from the Elian script. It is
        a constructed writing system designed for both aesthetics and practical
        communication.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Convert each letter to its corresponding Elian script symbol:</Text>
      <Text>- H becomes ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜</Text>
      <Text>- E becomes ⬜ ⬜⬜⬜</Text>
      <Text>- L becomes ⬜⬜⬜⬜</Text>
      <Text>- O becomes ⬜⬜</Text>
      <Text>- W becomes ⬜ ⬜⬜</Text>
      <Text>- R becomes ⬜⬜⬜⬜</Text>
      <Text>- D becomes ⬜ ⬜⬜⬜</Text>
      <Text>... and so on.</Text>
      <Text>Encrypt the entire message using Elian script symbols.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://example.com/elian-script-example-image.jpg" />
        <Image src="https://example.com/elian-script-example-image.jpg" width={300} />
      </Flex>
      <Text>
        Following this process, the encrypted message might look like: ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜ ⬜⬜ ⬜⬜⬜⬜ ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Elian_script"
        target="_blank"
      >
        Wikipedia - Elian Script
      </Link>
      <Link href="https://www.example.com/elian-script-reference.html" target="_blank">
        Example.com - Elian Script Reference
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
