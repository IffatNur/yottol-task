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

const resolveAsset = (asset) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  return `${ASSET_URL}${asset}`;
};
const useStyles = makeStyles({
  main: {
    ...shorthands.gap("36px"),
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  title: { ...shorthands.margin(0, 0, "12px") },
  description: { ...shorthands.margin(0, 0, "12px") },
  card: {
    width: "480px",
    maxWidth: "100%",
    height: "fit-content",
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  logo: { ...shorthands.borderRadius("4px"), width: "48px", height: "48px" },
  text: { ...shorthands.margin(0) },
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
        header={<Text weight="semibold">App Name</Text>}
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
        Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
        Marshmallow pastry jujubes toffee sugar plum.
      </p>
    </Card>
  );
};
export const Appearance = () => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <section>
        <CardExample appearance="subtle" />
      </section>
    </div>
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