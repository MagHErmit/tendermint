package v0

import (
	"github.com/MagHErmit/tendermint/abci/example/kvstore"
	"github.com/MagHErmit/tendermint/config"
	mempl "github.com/MagHErmit/tendermint/mempool"
	mempoolv0 "github.com/MagHErmit/tendermint/mempool/v0"
	"github.com/MagHErmit/tendermint/proxy"
)

var mempool mempl.Mempool

func init() {
	app := kvstore.NewApplication()
	cc := proxy.NewLocalClientCreator(app)
	appConnMem, _ := cc.NewABCIClient()
	err := appConnMem.Start()
	if err != nil {
		panic(err)
	}

	cfg := config.DefaultMempoolConfig()
	cfg.Broadcast = false
	mempool = mempoolv0.NewCListMempool(cfg, appConnMem, 0)
}

func Fuzz(data []byte) int {
	err := mempool.CheckTx(data, nil, mempl.TxInfo{})
	if err != nil {
		return 0
	}

	return 1
}
