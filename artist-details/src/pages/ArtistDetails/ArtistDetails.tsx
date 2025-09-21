import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useEffect, useState, Fragment } from "react";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spinner } from "@heroui/spinner";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { Title } from "./components/Title.tsx";
import { TopList } from "./components/TopList.tsx";
import { getArtistImage } from "./helpers/getArtistImage.ts";
import { splitByFirstAnchorTag } from "./helpers/splitByFirstAnchorTag.ts";

import { useGetArtistQuery } from "@/store/services/artist";

export const ArtistDetails = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);

  const { data, isLoading } = useGetArtistQuery(
    { artist: name },
    { skip: !name },
  );

  const onGetBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (data?.artist?.mbid) {
      getArtistImage(data.artist.mbid).then((url) => {
        setLogoSrc(url);
      });
    }
  }, [data?.artist?.mbid]);

  if (isLoading)
    return (
      <div className="h-[420px] flex items-center justify-center">
        <Spinner color="danger" />
      </div>
    );

  return (
    <div className="h-[calc(100vh-176px)]">
      <div className="flex flex-row flex-wrap gap-6 p-4">
        <Card className="w-[300px] h-max">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2 mb-4">
            <Title size="base">{data?.artist?.name}</Title>
            <p className="text-tiny font-bold">
              Playcount: {data?.artist?.stats.playcount}
            </p>
            <p className="text-tiny font-bold">
              Followers: {data?.artist?.stats.listeners}
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={270}
              src={logoSrc ?? data?.artist?.image[3]["#text"]}
              width={270}
            />
          </CardBody>
        </Card>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex justify-between items-center gap-3 pr-4 mt-4">
            <p className="font-bold text-large">
              Published: {data?.artist?.bio?.published}
            </p>
            <Button color="primary" onPress={onGetBack}>
              Get back
            </Button>
          </div>
          <ScrollShadow className="h-[340px] text-justify p-4">
            {data?.artist?.bio?.content.split("\n").map((paragraph, index) => {
              const paragraphWithTag = splitByFirstAnchorTag(paragraph);

              return paragraphWithTag?.filter(Boolean)?.length ? (
                <Fragment key={index}>
                  {paragraphWithTag[0] && (
                    <p className="indent-8">{paragraphWithTag[0]}</p>
                  )}
                  {paragraphWithTag[1] && (
                    <Link
                      isExternal
                      className="indent-8"
                      href={data?.artist?.url}
                    >
                      Read more on Last.fm
                    </Link>
                  )}
                  {paragraphWithTag[2] && (
                    <p className="indent-8">
                      {paragraphWithTag[2].slice(1).trim()}
                    </p>
                  )}
                </Fragment>
              ) : (
                <p key={index} className="indent-8">
                  {paragraph}
                </p>
              );
            })}
          </ScrollShadow>
          <div className="flex gap-6">
            {data?.artist?.mbid && (
              <TopList artist={data?.artist?.name} mbid={data.artist.mbid} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
