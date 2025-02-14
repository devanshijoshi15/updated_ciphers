import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Gray Code Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Gray Code Cipher is a binary-to-text encoding scheme where each
        character is represented by its Gray Code equivalent. Gray Code ensures
        that only one bit changes between consecutive values, making it useful
        in error detection and minimization in digital communications.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Convert each character to its Gray Code representation:</Text>
      <Text>
        - H (ASCII 72): 72 in binary is 01001000, Gray Code is 01101110 (changes
        in one bit).
      </Text>
      <Text>
        - E (ASCII 69): 69 in binary is 01000101, Gray Code is 01100110.
      </Text>
      <Text>
        - L (ASCII 76): 76 in binary is 01001100, Gray Code is 01101101.
      </Text>
      <Text>
        - O (ASCII 79): 79 in binary is 01001111, Gray Code is 01101011.
      </Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://example.com/gray_code_image1.jpg" />
        <Image
          src="https://example.com/gray_code_image2.jpg"
          width={300}
        />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Gray_code"
        target="_blank"
      >
        Wikipedia - Gray Code
      </Link>
      <Link href="https://www.tutorialspoint.com/gray_code" target="_blank">
        Tutorialspoint - Gray Code
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
