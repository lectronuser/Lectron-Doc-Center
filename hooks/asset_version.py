"""Append a content hash to extra_css / extra_javascript URLs.

GitHub Pages serves files with a 10-minute cache and the same name on every
deploy, so browsers kept the old extra.css after an update and the site
rendered with stale styles. A ?v=<hash> that changes with the file content
makes every deploy fetch the new version.
"""
import hashlib
import os


def _versioned(docs_dir, path):
    bare = path.split("?", 1)[0]
    full = os.path.join(docs_dir, bare)
    if not os.path.isfile(full):
        return path
    with open(full, "rb") as fh:
        digest = hashlib.md5(fh.read()).hexdigest()[:10]
    return f"{bare}?v={digest}"


def on_config(config, **kwargs):
    docs_dir = config["docs_dir"]
    config["extra_css"] = [_versioned(docs_dir, p) for p in config["extra_css"]]
    for item in config["extra_javascript"]:
        # MkDocs 1.6 wraps scripts in ExtraScriptValue objects; older versions use strings
        if hasattr(item, "path"):
            item.path = _versioned(docs_dir, item.path)
    config["extra_javascript"] = [
        _versioned(docs_dir, p) if isinstance(p, str) else p for p in config["extra_javascript"]
    ]
    return config
