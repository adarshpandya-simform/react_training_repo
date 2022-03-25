import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CHARACTERS } from "../../graphql";
import {
  CircularProgress,
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Pagination,
  PaginationItem,
  Link,
} from "@mui/material";
import NextLink from "next/link";

const CharactersPage = () => {
  const { page } = useRouter().query;
  const { data, error, loading } = useQuery(GET_CHARACTERS, {
    variables: { page: page === undefined ? 1 : +page },
  });

  if (loading) {
    return (
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    <code>{JSON.stringify(error)}</code>;
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      p={3}
    >
      {data.characters.results.map((character) => (
        <NextLink href={`/character/${character.id}`} key={character.id}>
          <Card
            elevation={6}
            sx={{ maxWidth: 245, margin: 2, cursor: "pointer" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="240"
              image={character.image}
            />
            <CardContent key={character.id}>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character.species}
              </Typography>
            </CardContent>
          </Card>
        </NextLink>
      ))}
      <br />
      <br />
      <Pagination
        count={data.characters.info.pages}
        page={+page}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/characters/${item.page}`}
            href={`/characters/${item.page}`}
          />
        )}
      />
      <br />
      <br />
    </Box>
  );
};

export default CharactersPage;
