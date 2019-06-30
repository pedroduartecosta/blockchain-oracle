# ethereum-oracle
This project intends to create a trustable oracle for the ethereum blockchain.

### Local development

Launch working terminals (eos node, keosd, and app terminal):

```$ tmux```

```$ teamocil oracle```


### Requirements:
- [yarn](https://yarnpkg.com) ou [npm](https://www.npmjs.com/)
- [truffle](https://www.trufflesuite.com/truffle)
- [ganache-cli](https://github.com/trufflesuite/ganache-cli)

### Local development setup

#### Install the `teamocil` Ruby gem
```$ gem install teamocil```

#### Create your layout directory
```$ mkdir ~/.teamocil```

#### Copy the [./confing/oracle.yml](https://github.com/pedroduartecosta/eos-oracle/blob/master/config/oracle.yml) configuration following to ~/.teamocil:

```$ cp ./scripts/oracle.yml ~/.teamocil/```


#### Launch tmux
```$ tmux```

#### Run your oracle layout
```$ teamocil oracle```'
