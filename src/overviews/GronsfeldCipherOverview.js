import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Gronsfeld Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Gronsfeld Cipher is a variant of the Vigenère Cipher, where each
        letter in the plaintext is shifted by a number of positions according
        to a key consisting of digits. It operates similarly to the Vigenère
        Cipher but uses a numeric key for shifting.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Choose a numeric key (e.g., 23145).</Text>
      <Text>
        For each letter in the plaintext message, find its corresponding digit
        in the key. Use this digit as the shift value for a Caesar Cipher.
      </Text>
      <Text>Encrypt the plaintext letter using the Caesar Cipher with the
        derived shift value.
      </Text>
      <Text>Example:</Text>
      <Text>- Plaintext: H (position 7)</Text>
      <Text>- Key digit: 2</Text>
      <Text>
        - Shift value: 2 (key digit) % 26 (number of alphabets) = 2
      </Text>
      <Text>- Encrypted: J (H shifted by 2 positions)</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://example.com/gronsfeld_cipher_image1.jpg" />
        <Image src="https://example.com/gronsfeld_cipher_image2.jpg" width={300} />
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: JGNNQ YQTKP.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Gronsfeld_cipher"
        target="_blank"
      >
        Wikipedia - Gronsfeld Cipher
      </Link>
      <Link href="https://www.cryptomuseum.com/crypto/gronsfeld/" target="_blank">
        Crypto Museum - Gronsfeld Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
