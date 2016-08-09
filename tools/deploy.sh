#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIRECTORY="$DIR/tmp"

if [ -d "$DIRECTORY" ]; then
  cd $DIRECTORY && git checkout production && git pull
else
  git clone -b production git@gitlab.wmt.dk:custos/custos.client.git $DIRECTORY
fi

cp -rv $DIR/../dist $DIRECTORY
cp $DIR/../package.json $DIRECTORY

cd $DIRECTORY && git add --all

cd $DIRECTORY && git commit -m "Autocommit deployed at `date` by Mik. B. Shvets"

cd $DIRECTORY && git push origin production
