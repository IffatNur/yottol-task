import React from 'react';
import {
  Card,
  CardHeader,
  CardProps,
} from "@fluentui/react-components/unstable";
import {
  makeStyles,
  shorthands,
  tokens,
  Button,
  Text,
  Caption1,
  Subtitle1,
  Body1,
  mergeClasses,
} from "@fluentui/react-components";
import { MoreHorizontal20Filled } from "@fluentui/react-icons";
import { ProgressBar } from "@fluentui/react-components/unstable";

const resolveAsset = (asset) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};
const useStyles = makeStyles({
  main: {
    ...shorthands.gap("10px"),
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    ...shorthands.margin("20px", "30px"),
  },
  title: { ...shorthands.margin(0, 0, "12px") },
  description: { ...shorthands.margin(0, 0, "12px") },
  card: {
    width: "350px",
    maxWidth: "100%",
    height: "fit-content",
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  logo: { ...shorthands.borderRadius("4px"), width: "48px", height: "48px" },
  text: { ...shorthands.margin(0) },
  container: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    ...shorthands.margin("20px", "30px"),
  },
});

const Cards = ({ title, description }) => {
    const styles = useStyles();
  return (
    <header>
      {title ? (
        <Subtitle1 as="h4" block className={styles.title}>
          {title}
        </Subtitle1>
      ) : null}

      {description ? (
        <Body1 as="p" block className={styles.description}>
          {description}
        </Body1>
      ) : null}
    </header>
  );
};
const CardExample = ({ className,
  ...props  }) => {
  const styles = useStyles();
  const onClick = React.useCallback(() => console.log("Interactive!"), []);
  return (
    <Card
      {...props}
      className={mergeClasses(className, styles.card)}
      onClick={onClick}
    >
      <CardHeader
        image={
          <img className={styles.logo} src={resolveAsset("app_logo.svg")} alt=""/>
        }
        header={<Text weight="semibold">Skill Set</Text>}
        description={<Caption1 className={styles.caption}>Developer</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Filled />}
            aria-label="More options"
          />
        }
      />

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam fugit quasi tenetur corporis. Sit repellat nisi ex voluptatum eligendi!
      </p>
    </Card>
  );
};
export const Appearance = () => {
  const styles = useStyles();
  return (
    <>
      <div
        className={styles.main}
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <section>
          <CardExample appearance="filled-alternative" />
        </section>
        <section>
          <CardExample appearance="filled-alternative" />
        </section>
        <section>
          <CardExample appearance="filled-alternative" />
        </section>
      </div>
      <div className={styles.container}>
        <span>ReactJS</span>
        <ProgressBar value={1} validationState="success" />
        <span>NodeJS</span>
        <ProgressBar value={0.95} validationState="warning" />
        <span>MongoDB</span>
        <ProgressBar value={0.75} validationState="error" />
      </div>
    </>
  );
};
Appearance.parameters = {
  docs: {
    description: {
      story:
        "Cards can have different styles depending on the situation and where it is placed.",
    },
  },
};
export default Appearance;