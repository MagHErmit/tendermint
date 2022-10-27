package v1

import (
	"github.com/MagHErmit/tendermint/abci/example/kvstore"
	"github.com/MagHErmit/tendermint/config"
	"github.com/MagHErmit/tendermint/libs/log"
	mempl "github.com/MagHErmit/tendermint/mempool"
	"github.com/MagHErmit/tendermint/proxy"

	mempoolv1 "github.com/MagHErmit/tendermint/mempool/v1"
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
	log := log.NewNopLogger()
	mempool = mempoolv1.NewTxMempool(log, cfg, appConnMem, 0)
}

func Fuzz(data []byte) int {

	err := mempool.CheckTx(data, nil, mempl.TxInfo{})
	if err != nil {
		return 0
	}

	return 1
}
