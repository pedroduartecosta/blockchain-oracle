# ethereum-oracle
This project intends to create a trustable oracle for the ethereum blockchain.

### Requirements:
- [yarn](https://yarnpkg.com) ou [npm](https://www.npmjs.com/)
- [truffle](https://www.trufflesuite.com/truffle)
- [ganache-cli](https://github.com/trufflesuite/ganache-cli)

### Local development
The following setup will launch three terminals and requires the use of the [tmux](https://github.com/tmux/tmux/wiki) terminal and [teamocile](http://www.teamocil.com/) for managing windows. However, it can be ran with a normal terminal, opening three windows and running the commands identified here: [./scripts/oracle.yml](https://github.com/pedroduartecosta/blockchain-oracle/blob/master/scripts/oracle.yml).

```$ tmux```

```$ teamocil oracle```

### Local development setup

#### Install the `teamocil` Ruby gem
```$ gem install teamocil```

#### Create your layout directory
```$ mkdir ~/.teamocil```

#### Copy the [./scripts/oracle.yml](https://github.com/pedroduartecosta/blockchain-oracle/blob/master/scripts/oracle.yml) configuration following to ~/.teamocil:

```$ cp ./scripts/oracle.yml ~/.teamocil/```


#### Launch tmux
```$ tmux```

#### Run your oracle layout
```$ teamocil oracle```'
