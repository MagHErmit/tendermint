(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{763:function(e,t,o){"use strict";o.r(t);var r=o(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method"}},[e._v("#")]),e._v(" Method")]),e._v(" "),o("p",[e._v("This document provides a detailed description of the QA process.\nIt is intended to be used by engineers reproducing the experimental setup for future tests of Tendermint.")]),e._v(" "),o("p",[e._v("The (first iteration of the) QA process as described "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/RELEASES.md#large-scale-testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the RELEASES.md document"),o("OutboundLink")],1),e._v("\nwas applied to version v0.34.x in order to have a set of results acting as benchmarking baseline.\nThis baseline is then compared with results obtained in later versions.")]),e._v(" "),o("p",[e._v("Out of the testnet-based test cases described in "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.x/RELEASES.md#large-scale-testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("the releases document"),o("OutboundLink")],1),e._v(" we focused on two of them:\n"),o("em",[e._v("200 Node Test")]),e._v(", and "),o("em",[e._v("Rotating Nodes Test")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"software-dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-dependencies"}},[e._v("#")]),e._v(" Software Dependencies")]),e._v(" "),o("h3",{attrs:{id:"infrastructure-requirements-to-run-the-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-requirements-to-run-the-tests"}},[e._v("#")]),e._v(" Infrastructure Requirements to Run the Tests")]),e._v(" "),o("ul",[o("li",[e._v("An account at Digital Ocean (DO), with a high droplet limit (>202)")]),e._v(" "),o("li",[e._v("The machine to orchestrate the tests should have the following installed:\n"),o("ul",[o("li",[e._v("A clone of the "),o("a",{attrs:{href:"https://github.com/interchainio/tendermint-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repository"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("This repository contains all the scripts mentioned in the reminder of this section")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.digitalocean.com/reference/doctl/how-to/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Ocean CLI"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.terraform.io/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform CLI"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible CLI"),o("OutboundLink")],1)])])])]),e._v(" "),o("h3",{attrs:{id:"requirements-for-result-extraction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-result-extraction"}},[e._v("#")]),e._v(" Requirements for Result Extraction")]),e._v(" "),o("ul",[o("li",[e._v("Matlab or Octave")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),o("OutboundLink")],1),e._v(" server installed")]),e._v(" "),o("li",[e._v("blockstore DB of one of the full nodes in the testnet")]),e._v(" "),o("li",[e._v("Prometheus DB")])]),e._v(" "),o("h2",{attrs:{id:"_200-node-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_200-node-testnet"}},[e._v("#")]),e._v(" 200 Node Testnet")]),e._v(" "),o("h3",{attrs:{id:"running-the-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-the-test"}},[e._v("#")]),e._v(" Running the test")]),e._v(" "),o("p",[e._v("This section explains how the tests were carried out for reproducibility purposes.")]),e._v(" "),o("ol",[o("li",[e._v("[If you haven't done it before]\nFollow steps 1-4 of the "),o("code",[e._v("README.md")]),e._v(" at the top of the testnet repository to configure Terraform, and "),o("code",[e._v("doctl")]),e._v(".")]),e._v(" "),o("li",[e._v("Copy file "),o("code",[e._v("testnets/testnet200.toml")]),e._v(" onto "),o("code",[e._v("testnet.toml")]),e._v(" (do NOT commit this change)")]),e._v(" "),o("li",[e._v("Set the variable "),o("code",[e._v("VERSION_TAG")]),e._v(" in the "),o("code",[e._v("Makefile")]),e._v(" to the git hash that is to be tested.")]),e._v(" "),o("li",[e._v("Follow steps 5-10 of the "),o("code",[e._v("README.md")]),e._v(" to configure and start the 200 node testnet\n"),o("ul",[o("li",[e._v("WARNING: Do NOT forget to run "),o("code",[e._v("make terraform-destroy")]),e._v(" as soon as you are done with the tests (see step 9)")])])]),e._v(" "),o("li",[e._v("As a sanity check, connect to the Prometheus node's web interface and check the graph for the "),o("code",[e._v("tendermint_consensus_height")]),e._v(" metric.\nAll nodes should be increasing their heights.")]),e._v(" "),o("li",[o("code",[e._v("ssh")]),e._v(" into the "),o("code",[e._v("testnet-load-runner")]),e._v(", then copy script "),o("code",[e._v("script/200-node-loadscript.sh")]),e._v(" and run it from the load runner node.\n"),o("ul",[o("li",[e._v("Before running it, you need to edit the script to provide the IP address of a full node.\nThis node will receive all transactions from the load runner node.")]),e._v(" "),o("li",[e._v("This script will take about 40 mins to run")]),e._v(" "),o("li",[e._v("It is running 90-seconds-long experiments in a loop with different loads")])])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("make retrieve-data")]),e._v(" to gather all relevant data from the testnet into the orchestrating machine")]),e._v(" "),o("li",[e._v("Verify that the data was collected without errors\n"),o("ul",[o("li",[e._v("at least one blockstore DB for a Tendermint validator")]),e._v(" "),o("li",[e._v("the Prometheus database from the Prometheus node")]),e._v(" "),o("li",[e._v("for extra care, you can run "),o("code",[e._v("zip -T")]),e._v(" on the "),o("code",[e._v("prometheus.zip")]),e._v(" file and (one of) the "),o("code",[e._v("blockstore.db.zip")]),e._v(" file(s)")])])]),e._v(" "),o("li",[o("strong",[e._v("Run "),o("code",[e._v("make terraform-destroy")])]),e._v(" "),o("ul",[o("li",[e._v("Don't forget to type "),o("code",[e._v("yes")]),e._v("! Otherwise you're in trouble.")])])])]),e._v(" "),o("h3",{attrs:{id:"result-extraction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#result-extraction"}},[e._v("#")]),e._v(" Result Extraction")]),e._v(" "),o("p",[e._v("The method for extracting the results described here is highly manual (and exploratory) at this stage.\nThe Core team should improve it at every iteration to increase the amount of automation.")]),e._v(" "),o("h4",{attrs:{id:"steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Unzip the blockstore into a directory")])]),e._v(" "),o("li",[o("p",[e._v("Extract the latency report and the raw latencies for all the experiments. Run these commands from the directory containing the blockstore")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("go run github.com/tendermint/tendermint/test/loadtime/cmd/report@3ec6e424d --database-type goleveldb --data-dir ./ > results/report.txt")])]),e._v(" "),o("li",[o("code",[e._v("go run github.com/tendermint/tendermint/test/loadtime/cmd/report@3ec6e424d --database-type goleveldb --data-dir ./ --csv results/raw.csv")])])])]),e._v(" "),o("li",[o("p",[e._v("File "),o("code",[e._v("report.txt")]),e._v(" contains an unordered list of experiments with varying concurrent connections and transaction rate")]),e._v(" "),o("ul",[o("li",[e._v("Create files "),o("code",[e._v("report01.txt")]),e._v(", "),o("code",[e._v("report02.txt")]),e._v(", "),o("code",[e._v("report04.txt")]),e._v(" and, for each experiment in file "),o("code",[e._v("report.txt")]),e._v(",\ncopy its related lines to the filename that matches the number of connections.")]),e._v(" "),o("li",[e._v("Sort the experiments in "),o("code",[e._v("report01.txt")]),e._v(" in ascending tx rate order. Likewise for "),o("code",[e._v("report02.txt")]),e._v(" and "),o("code",[e._v("report04.txt")]),e._v(".")])])]),e._v(" "),o("li",[o("p",[e._v("Generate file "),o("code",[e._v("report_tabbed.txt")]),e._v(" by showing the contents "),o("code",[e._v("report01.txt")]),e._v(", "),o("code",[e._v("report02.txt")]),e._v(", "),o("code",[e._v("report04.txt")]),e._v(" side by side")]),e._v(" "),o("ul",[o("li",[e._v("This effectively creates a table where rows are a particular tx rate and columns are a particular number of websocket connections.")])])]),e._v(" "),o("li",[o("p",[e._v("Extract the raw latencies from file "),o("code",[e._v("raw.csv")]),e._v(" using the following bash loop. This creates a "),o("code",[e._v(".csv")]),e._v(" file and a "),o("code",[e._v(".dat")]),e._v(" file per experiment.\nThe format of the "),o("code",[e._v(".dat")]),e._v(" files is amenable to loading them as matrices in Octave")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dXVpZHM9KCQoY2F0IHJlcG9ydDAxLnR4dCByZXBvcnQwMi50eHQgcmVwb3J0MDQudHh0IHwgZ3JlcCAnXkV4cGVyaW1lbnQgSUQ6ICcgfCBhd2sgJ3sgcHJpbnQgJDMgfScpKQpjPTEKZm9yIGkgaW4gMDEgMDIgMDQ7IGRvCiAgZm9yIGogaW4gMDAyNSAwMDUwIDAxMDAgMDIwMDsgZG8KICAgIGVjaG8gJGkgJGogJGMgJnF1b3Q7JHt1dWlkc1skY119JnF1b3Q7CiAgICBmaWxlbmFtZT1jJHtpfV9yJHtqfQogICAgZ3JlcCAke3V1aWRzWyRjXX0gcmF3LmNzdiAmZ3Q7ICR7ZmlsZW5hbWV9LmNzdgogICAgY2F0ICR7ZmlsZW5hbWV9LmNzdiB8IHRyICwgJyAnIHwgYXdrICd7IHByaW50ICQyLCAkMyB9JyAmZ3Q7ICR7ZmlsZW5hbWV9LmRhdAogICAgYz0kKGV4cHIgJGMgKyAxKQogIGRvbmUKZG9uZQo="}})],1),e._v(" "),o("li",[o("p",[e._v("Enter Octave")])]),e._v(" "),o("li",[o("p",[e._v("Load all "),o("code",[e._v(".dat")]),e._v(" files generated in step 5 into matrices using this Octave code snippet")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"octave",base64:"Y29ubnMgPSAgeyAmcXVvdDswMSZxdW90OzsgJnF1b3Q7MDImcXVvdDs7ICZxdW90OzA0JnF1b3Q7IH07CnJhdGVzID0gIHsgJnF1b3Q7MDAyNSZxdW90OzsgJnF1b3Q7MDA1MCZxdW90OzsgJnF1b3Q7MDEwMCZxdW90OzsgJnF1b3Q7MDIwMCZxdW90OyB9Owpmb3IgaSA9IDE6bGVuZ3RoKGNvbm5zKQogIGZvciBqID0gMTpsZW5ndGgocmF0ZXMpCiAgICBmaWxlbmFtZSA9IHN0cmNhdCgmcXVvdDtjJnF1b3Q7LCBjb25uc3tpfSwgJnF1b3Q7X3ImcXVvdDssIHJhdGVze2p9LCAmcXVvdDsuZGF0JnF1b3Q7KTsKICAgIGxvYWQoJnF1b3Q7LWFzY2lpJnF1b3Q7LCBmaWxlbmFtZSk7CiAgZW5kZm9yCmVuZGZvcgo="}})],1),e._v(" "),o("li",[o("p",[e._v("Set variable release to the current release undergoing QA")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"octave",base64:"cmVsZWFzZSA9ICZxdW90O3YwLjM0LngmcXVvdDs7Cg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Generate a plot with all (or some) experiments, where the X axis is the experiment time,\nand the y axis is the latency of transactions.\nThe following snippet plots all experiments.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"octave",base64:"bGVnZW5kcyA9IHt9Owpob2xkIG9mZjsKZm9yIGkgPSAxOmxlbmd0aChjb25ucykKICBmb3IgaiA9IDE6bGVuZ3RoKHJhdGVzKQogICAgZGF0YV9uYW1lID0gc3RyY2F0KCZxdW90O2MmcXVvdDssIGNvbm5ze2l9LCAmcXVvdDtfciZxdW90OywgcmF0ZXN7an0pOwogICAgbCA9IHN0cmNhdCgmcXVvdDtjPSZxdW90OywgY29ubnN7aX0sICZxdW90OyByPSZxdW90OywgcmF0ZXN7an0pOwogICAgbSA9IGV2YWwoZGF0YV9uYW1lKTsgcGxvdCgobSg6LDEpIC0gbWluKG0oOiwxKSkpIC8gMWUrOSwgbSg6LDIpIC8gMWUrOSwgJnF1b3Q7LiZxdW90Oyk7CiAgICBob2xkIG9uOwogICAgbGVnZW5kcygxLCBlbmQrMSkgPSBsOwogIGVuZGZvcgplbmRmb3IKbGVnZW5kKGxlZ2VuZHMsICZxdW90O2xvY2F0aW9uJnF1b3Q7LCAmcXVvdDtub3J0aGVhc3RvdXRzaWRlJnF1b3Q7KTsKeGxhYmVsKCZxdW90O2V4cGVyaW1lbnQgdGltZSAocykmcXVvdDspOwp5bGFiZWwoJnF1b3Q7bGF0ZW5jeSAocykmcXVvdDspOwp0ID0gc3ByaW50ZigmcXVvdDsyMDAtbm9kZSB0ZXN0bmV0IC0gJXMmcXVvdDssIHJlbGVhc2UpOwp0aXRsZSh0KTsK"}})],1),e._v(" "),o("li",[o("p",[e._v("Consider adjusting the axis, in case you want to compare your results to the baseline, for instance")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"octave",base64:"YXhpcyhbMCwgMTAwLCAwLCAzMF0sICZxdW90O3RpYyZxdW90Oyk7Cg=="}})],1),e._v(" "),o("li",[o("p",[e._v("Use Octave's GUI menu to save the plot (e.g. as "),o("code",[e._v(".png")]),e._v(")")])]),e._v(" "),o("li",[o("p",[e._v("Repeat steps 9 and 10 to obtain as many plots as deemed necessary.")])]),e._v(" "),o("li",[o("p",[e._v("To generate a latency vs throughput plot, using the raw CSV file generated\nin step 2, follow the instructions for the "),o("RouterLink",{attrs:{to:"/scripts/qa/reporting/"}},[o("code",[e._v("latency_throughput.py")])]),e._v(" script.")],1)])]),e._v(" "),o("h4",{attrs:{id:"extracting-prometheus-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extracting-prometheus-metrics"}},[e._v("#")]),e._v(" Extracting Prometheus Metrics")]),e._v(" "),o("ol",[o("li",[e._v("Stop the prometheus server if it is running as a service (e.g. a "),o("code",[e._v("systemd")]),e._v(" unit).")]),e._v(" "),o("li",[e._v("Unzip the prometheus database retrieved from the testnet, and move it to replace the\nlocal prometheus database.")]),e._v(" "),o("li",[e._v("Start the prometheus server and make sure no error logs appear at start up.")]),e._v(" "),o("li",[e._v("Introduce the metrics you want to gather or plot.")])]),e._v(" "),o("h2",{attrs:{id:"rotating-node-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rotating-node-testnet"}},[e._v("#")]),e._v(" Rotating Node Testnet")]),e._v(" "),o("h3",{attrs:{id:"running-the-test-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-the-test-2"}},[e._v("#")]),e._v(" Running the test")]),e._v(" "),o("p",[e._v("This section explains how the tests were carried out for reproducibility purposes.")]),e._v(" "),o("ol",[o("li",[e._v("[If you haven't done it before]\nFollow steps 1-4 of the "),o("code",[e._v("README.md")]),e._v(" at the top of the testnet repository to configure Terraform, and "),o("code",[e._v("doctl")]),e._v(".")]),e._v(" "),o("li",[e._v("Copy file "),o("code",[e._v("testnet_rotating.toml")]),e._v(" onto "),o("code",[e._v("testnet.toml")]),e._v(" (do NOT commit this change)")]),e._v(" "),o("li",[e._v("Set variable "),o("code",[e._v("VERSION_TAG")]),e._v(" to the git hash that is to be tested.")]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("make terraform-apply EPHEMERAL_SIZE=25")]),e._v(" "),o("ul",[o("li",[e._v("WARNING: Do NOT forget to run "),o("code",[e._v("make terraform-destroy")]),e._v(" as soon as you are done with the tests")])])]),e._v(" "),o("li",[e._v("Follow steps 6-10 of the "),o("code",[e._v("README.md")]),e._v(' to configure and start the "stable" part of the rotating node testnet')]),e._v(" "),o("li",[e._v("As a sanity check, connect to the Prometheus node's web interface and check the graph for the "),o("code",[e._v("tendermint_consensus_height")]),e._v(" metric.\nAll nodes should be increasing their heights.")]),e._v(" "),o("li",[e._v("On a different shell,\n"),o("ul",[o("li",[e._v("run "),o("code",[e._v("make runload ROTATE_CONNECTIONS=X ROTATE_TX_RATE=Y")])]),e._v(" "),o("li",[o("code",[e._v("X")]),e._v(" and "),o("code",[e._v("Y")]),e._v(" should reflect a load below the saturation point (see, e.g.,\n"),o("RouterLink",{attrs:{to:"/qa/v034/#finding-the-saturation-point"}},[e._v("this paragraph")]),e._v(" for further info)")],1)])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("make rotate")]),e._v(" to start the script that creates the ephemeral nodes, and kills them when they are caught up.\n"),o("ul",[o("li",[e._v("WARNING: If you run this command from your laptop, the laptop needs to be up and connected for full length\nof the experiment.")])])]),e._v(" "),o("li",[e._v("When the height of the chain reaches 3000, stop the "),o("code",[e._v("make rotate")]),e._v(" script")]),e._v(" "),o("li",[e._v("When the rotate script has made two iterations (i.e., all ephemeral nodes have caught up twice)\nafter height 3000 was reached, stop "),o("code",[e._v("make rotate")])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("make retrieve-data")]),e._v(" to gather all relevant data from the testnet into the orchestrating machine")]),e._v(" "),o("li",[e._v("Verify that the data was collected without errors\n"),o("ul",[o("li",[e._v("at least one blockstore DB for a Tendermint validator")]),e._v(" "),o("li",[e._v("the Prometheus database from the Prometheus node")]),e._v(" "),o("li",[e._v("for extra care, you can run "),o("code",[e._v("zip -T")]),e._v(" on the "),o("code",[e._v("prometheus.zip")]),e._v(" file and (one of) the "),o("code",[e._v("blockstore.db.zip")]),e._v(" file(s)")])])]),e._v(" "),o("li",[o("strong",[e._v("Run "),o("code",[e._v("make terraform-destroy")])])])]),e._v(" "),o("p",[e._v("Steps 8 to 10 are highly manual at the moment and will be improved in next iterations.")]),e._v(" "),o("h3",{attrs:{id:"result-extraction-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#result-extraction-2"}},[e._v("#")]),e._v(" Result Extraction")]),e._v(" "),o("p",[e._v("In order to obtain a latency plot, follow the instructions above for the 200 node experiment, but:")]),e._v(" "),o("ul",[o("li",[e._v("The "),o("code",[e._v("results.txt")]),e._v(" file contains only one experiment")]),e._v(" "),o("li",[e._v("Therefore, no need for any "),o("code",[e._v("for")]),e._v(" loops")])]),e._v(" "),o("p",[e._v("As for prometheus, the same method as for the 200 node experiment can be applied.")])])}),[],!1,null,null,null);t.default=a.exports}}]);