gen:
	gomplate -c const=constants.yaml --input-dir="templates" --output-dir="publish"

merge:
	redocly lint ./publish/openapi.yaml && redocly bundle ./publish/openapi.yaml -o ./publish/bundled.yaml
