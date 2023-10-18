/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import React, { type ReactNode } from "react";

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children?: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--outline button--primary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
          {children}
        </div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--4 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="리오"
        githubUrl="https://github.com/Jaeyoung22"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="후추"
        githubUrl="https://github.com/Combi153"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="허브"
        githubUrl="https://github.com/greeng00se"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="수달"
        githubUrl="https://github.com/otter66"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="멧돼지"
        githubUrl="https://github.com/2chang5"
      ></TeamProfileCardCol>
      <TeamProfileCardCol
        name="핑구"
        githubUrl="https://github.com/pingu244"
      ></TeamProfileCardCol>
      {/* <TeamProfileCardCol
        name="Sida Chen"
        githubUrl="https://github.com/Josh-Cena"
        twitterUrl="https://twitter.com/SidaChen63">
        <Translate id="team.profile.Sida Chen.body">
          Student from Shanghai, China. Enthusiastic open-source project
          creator, but never actually works hard on those projects he created.
        </Translate>
      </TeamProfileCardCol> */}
    </div>
  );
}
